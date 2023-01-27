<?php

namespace App\Controller;

use App\Entity\Message;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MessageController extends AbstractController
{
    #[Route('/messages/from/{toUserId}', name: 'message')]
    public function index(): Response
    {
        $message = new Message();
    }
}
